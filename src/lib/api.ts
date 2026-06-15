import { db, ensureAuth } from "./cloudbase";

export interface BookingData {
  name: string;
  phone: string;
  shootType: string;
  preferredDate: string;
  note?: string;
  createdAt: Date;
}

export interface ContactData {
  name: string;
  phone: string;
  message: string;
  createdAt: Date;
}

export async function submitBooking(data: Omit<BookingData, "createdAt">) {
  await ensureAuth();
  const result = await db.collection("bookings").add({
    ...data,
    createdAt: new Date(),
  });
  return result;
}

export async function submitContact(data: Omit<ContactData, "createdAt">) {
  await ensureAuth();
  const result = await db.collection("contacts").add({
    ...data,
    createdAt: new Date(),
  });
  return result;
}
