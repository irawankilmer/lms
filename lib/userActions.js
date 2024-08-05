'use server';
import prisma from "./prisma";

export async function getUsers() {
	const users = await prisma.user.findMany();
	return users;
}