import { getAllQuotes, getPage } from "@/lib/notion"

// import { NotionRenderer } from "react-notion-x"
// import dynamic from 'next/dynamic'
import QuoteBox from "@/components/QuoteBox"

export default  async function Blog(){
    // const [data , setData] = useState<any>()

  

// const Code = dynamic(() =>
//   import('react-notion-x/build/third-party/code').then((m) => m.Code)
// )
// const Collection = dynamic(() =>
//   import('react-notion-x/build/third-party/collection').then(
//     (m) => m.Collection
//   )
// )
// const Equation = dynamic(() =>
//   import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
// )
// const Pdf = dynamic(
//   () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
//   {
//     ssr: false
//   }
// )
// const Modal = dynamic(
//   () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
//   {
//     ssr: false
//   }
// )
//     useEffect(()=>{
//         const getData = async()=>{
//              const blogs = await getAllBlogs()
//     const pages:any = await getPage()
//     // console.log(blogs)
//     console.log(pages)
//     setData(pages)
//         }
//         getData()
//     },[])

    const quotes = await getAllQuotes()
    console.log(quotes)
   
    return (
        <div className="max-w-[600px] mx-auto mt-14">
            <h1 className="uppercase text-xl text-primary text-center mb-20 font-semibold">Quotes</h1>
          
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 ">
            {
              quotes.map((quote) => <QuoteBox id={quote.slug} quote={quote.quote} url={quote.image} key={quote.id}/>)
            }
            </div>
                
            {/* <div>
                <NotionRenderer
                    recordMap={data}
                    
                    components={{
                        Code,
                        Collection,
                        Equation,
                        Modal,
                        Pdf
                      }}
                />
            </div> */}
        </div>
    )
}