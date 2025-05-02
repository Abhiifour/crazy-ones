"use server"
import { Client } from "@notionhq/client";
import { NotionAPI } from "notion-client";
import { env } from "process";

const notionClient = new NotionAPI()



export async function getPage(){
    const data = await notionClient.getPage("1e5da8a59a8f800cae62ef8777280eda")
    console.log(data)
}




const notion = new Client({
    auth:env.NOTION_AUTH_TOKEN || ""
})

export async function getAllQuotes(){
    const quotes = await notion.databases.query({
        database_id:env.NOTION_DATABASE_ID || "",
        filter:{
            property:'Published',
            checkbox:{
                equals:true
            },
            
        },
        sorts:[
            {
                property:'Published Date',
                direction:'descending'
            }
        ]
    })

    const allQuotes = quotes.results.map((quote:any) => {
        return {
            id:quote.id,
            quote:quote.properties.Quote.rich_text[0].text.content,
            url:quote.properties.Slug.rich_text[0].text.content,
            image:quote.properties.Image.files[0].file.url,
            slug:quote.properties.Slug.rich_text[0].text.content,
            published:quote.properties.Published.checkbox,
            publishedDate:quote.properties['Published Date'].date.start,
            name:quote.properties.Name.title[0].text.content,
        }
    });

    return allQuotes;
}

export async function getAQuote(id:string){
    const quote:any = await notion.databases.query({
        database_id:'1e5da8a59a8f80308178e3f81e2f2880',
        filter:{
            property:'Slug',
            rich_text:{
                equals:id
            }
            
        }
    })

    return {
        id:quote.results[0].id,
        quote:quote.results[0].properties.Quote.rich_text[0].text.content,
        url:quote.results[0].properties.Slug.rich_text[0].text.content,
        image:quote.results[0].properties.Image.files[0].file.url,
        slug:quote.results[0].properties.Slug.rich_text[0].text.content,
        published:quote.results[0].properties.Published.checkbox,
        publishedDate:quote.results[0].properties['Published Date'].date.start,
        name:quote.results[0].properties.Name.title[0].text.content,
    }
}