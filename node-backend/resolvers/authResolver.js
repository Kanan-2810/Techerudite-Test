const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/auth");
const { PrismaClient } = require('@prisma/client'); // Import Prisma Client
const prisma = new PrismaClient(); // Initialize Prisma Client

const resolvers = {
  Mutation: {
    register: async (_, { firstName, lastName, email, password, role }) => {
      const user = await prisma.user.findUnique({
        where: { email },
      });
      
      if (user) throw new Error("User with provided email already exists");

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password: hashedPassword,
          role,
        },
      });

      return {
        user: {
          id: newUser.id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          role: newUser.role,
        },
        message: "User registered successfully",
      };
    },

    login: async (_, { email, password, adminLogin }) => {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) throw new Error("User not found");

      if (
        (adminLogin && user.role !== 'admin') ||
        (!adminLogin && user.role === 'admin')
      )
        throw new Error("You are not allowed to login from here");

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) throw new Error("Invalid credentials");

      const token = generateToken(user);
      return { token, message: "Login successful" };
    },
  },

  Query: {
    getUser: async (_, { email }) => {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) throw new Error("User not found");
      return user;
    },
  },
};

module.exports = resolvers;
