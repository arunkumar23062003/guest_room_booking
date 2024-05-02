"use client";

import { z } from "zod";

export const roomsSchema = z.object({
  floorNumber: z.string().min(1),
  roomNo: z.string().min(1),
  ac: z.string({ required_error: "Please select a value" }),
  beds: z.string().or(z.number()),
  pillows: z.string().or(z.number()),
  bedSheets: z.string().or(z.number()),
  minDaysToStay: z.number(),
  maxDaysToStay: z.number(),
  amenities: z.string().optional(),
  maximumGuest: z.number(),
  maximumChildren: z.number(),
  maximumPets: z.number(),
  pricePerGuest: z.string().min(1),
  pricePerChildren: z.string().optional(),
  pricePerPets: z.string().optional(),
});

export const registerFormSchema = z.object({
  roomName: z.string().min(1),
  address: z.string().min(10),
  locationLink: z.string().url(),
  email: z.string().email(),
  phoneNumber: z.string().min(5).max(10).or(z.number()),
  amenities: z.array(z.string()).optional(),
  rooms: z.array(roomsSchema),
});


