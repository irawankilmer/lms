'use client';

import { useState, useEffect } from "react";

export default function UserPage() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		async function fetcUsers() {
			const response = await fetch('/api/users/get-all');
		}
	}, []);
}