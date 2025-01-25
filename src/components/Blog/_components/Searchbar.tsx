import Form from "next/form";

export default function Searchbar({query}:{query?:string}){
    return (
        <Form action="/" scroll={false} >
            <input
             name="query"
             defaultValue={query}
             className=""
             placeholder="Search Startups"
            />

        </Form>
    )
}