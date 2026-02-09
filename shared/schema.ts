import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table (kept from original)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Beta Signup table
export const betaSignups = pgTable("beta_signups", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  favoriteSport: text("favorite_sport").notNull(),
  updates: boolean("updates").default(false),
  signupDate: timestamp("signup_date").notNull(),
});

export const insertBetaSignupSchema = createInsertSchema(betaSignups).omit({
  id: true,
});

export type InsertBetaSignup = z.infer<typeof insertBetaSignupSchema>;
export type BetaSignup = typeof betaSignups.$inferSelect;

// Partnership Inquiry table
export const partnershipInquiries = pgTable("partnership_inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  university: text("university").notNull(),
  department: text("department").notNull(),
  interest: text("interest").notNull(),
  message: text("message"),
  subscribe: boolean("subscribe").default(false),
  inquiryDate: timestamp("inquiry_date").notNull(),
});

export const insertPartnershipInquirySchema = createInsertSchema(partnershipInquiries).omit({
  id: true,
});

export type InsertPartnershipInquiry = z.infer<typeof insertPartnershipInquirySchema>;
export type PartnershipInquiry = typeof partnershipInquiries.$inferSelect;

// Media Request table
export const mediaRequests = pgTable("media_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  organization: text("organization").notNull(),
  requestType: text("request_type").notNull(),
  deadline: text("deadline"),
  message: text("message").notNull(),
  pressReleases: boolean("press_releases").default(false),
  requestDate: timestamp("request_date").notNull(),
});

export const insertMediaRequestSchema = createInsertSchema(mediaRequests).omit({
  id: true,
});

export type InsertMediaRequest = z.infer<typeof insertMediaRequestSchema>;
export type MediaRequest = typeof mediaRequests.$inferSelect;

// Newsletter Subscribers table
export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  subscribeDate: timestamp("subscribe_date").notNull(),
});

export const insertSubscriberSchema = createInsertSchema(subscribers).omit({
  id: true,
});

export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type Subscriber = typeof subscribers.$inferSelect;
