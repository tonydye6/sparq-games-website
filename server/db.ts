
import { drizzle } from 'drizzle-orm/neon-serverless';
import { neon } from '@neondatabase/serverless';
import { 
  users, betaSignups, partnershipInquiries, mediaRequests, subscribers,
  type User, type InsertUser,
  type BetaSignup, type InsertBetaSignup,
  type PartnershipInquiry, type InsertPartnershipInquiry,
  type MediaRequest, type InsertMediaRequest,
  type Subscriber, type InsertSubscriber
} from '@shared/schema';
import { eq } from 'drizzle-orm';
import type { IStorage } from './storage';

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required");
}

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0];
  }

  async createUser(user: InsertUser): Promise<User> {
    const result = await db.insert(users).values(user).returning();
    return result[0];
  }

  // Beta Signup methods
  async createBetaSignup(signup: InsertBetaSignup): Promise<BetaSignup> {
    const result = await db.insert(betaSignups).values({
      ...signup,
      signupDate: new Date(signup.signupDate)
    }).returning();
    return result[0];
  }

  async getBetaSignups(): Promise<BetaSignup[]> {
    return await db.select().from(betaSignups);
  }

  async getBetaSignupByEmail(email: string): Promise<BetaSignup | undefined> {
    const result = await db.select().from(betaSignups).where(eq(betaSignups.email, email)).limit(1);
    return result[0];
  }

  // Partnership Inquiry methods
  async createPartnershipInquiry(inquiry: InsertPartnershipInquiry): Promise<PartnershipInquiry> {
    const result = await db.insert(partnershipInquiries).values({
      ...inquiry,
      inquiryDate: new Date(inquiry.inquiryDate)
    }).returning();
    return result[0];
  }

  async getPartnershipInquiries(): Promise<PartnershipInquiry[]> {
    return await db.select().from(partnershipInquiries);
  }

  // Media Request methods
  async createMediaRequest(request: InsertMediaRequest): Promise<MediaRequest> {
    const result = await db.insert(mediaRequests).values({
      ...request,
      requestDate: new Date(request.requestDate)
    }).returning();
    return result[0];
  }

  async getMediaRequests(): Promise<MediaRequest[]> {
    return await db.select().from(mediaRequests);
  }

  // Subscriber methods
  async createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber> {
    const result = await db.insert(subscribers).values({
      ...subscriber,
      subscribeDate: new Date(subscriber.subscribeDate)
    }).returning();
    return result[0];
  }

  async getSubscribers(): Promise<Subscriber[]> {
    return await db.select().from(subscribers);
  }

  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    const result = await db.select().from(subscribers).where(eq(subscribers.email, email)).limit(1);
    return result[0];
  }
}

export const databaseStorage = new DatabaseStorage();
