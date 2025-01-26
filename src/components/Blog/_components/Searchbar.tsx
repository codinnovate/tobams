'use client';


import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "next/form";

export default function Searchbar({ query }: { query?: string }) {
  const [searchQuery, setSearchQuery] = useState(query || "");
  const [category, setCategory] = useState("");
  const router = useRouter();

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle category change
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Update the URL with query params based on search and category
    const queryParams = new URLSearchParams();
    if (searchQuery) queryParams.append("query", searchQuery);
    if (category) queryParams.append("category", category);

    router.push(`/?${queryParams.toString()}`);
  };

  return (
    <div className="flex gap-3 justify-center items-center">
      <Form action="/"  onSubmit={handleSubmit} className="flex relative w-full items-center max-w-[635px]" scroll={false}>
        <input
          name="query"
          value={searchQuery}
          onChange={handleSearchChange}
          className="h-[40px] w-full rounded-[8px] px-3 bg-[#1515150F] outline-none"
          placeholder="Search Startups"
        />
        <svg className="absolute right-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </Form>

      <select
        value={category}
        onChange={handleCategoryChange}
        className="bg-[#1515150F] h-[40px] rounded-[8px] px-6 outline-none"
      >
        <option value="">All Categories</option>
        <option value="tech">Tech</option>
        <option value="finance">Finance</option>
        <option value="startup">Startup</option>
        <option value="lifestyle">Lifestyle</option>
      </select>
    </div>
  );
}
