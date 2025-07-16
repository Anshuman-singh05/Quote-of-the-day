const quote=document.getElementById("quote");
const author=document.getElementById("author");
const newQuotebtn= document.getElementById("newQuote");
const api_url= "https://favqs.com/api/qotd";


const getquote=async()=> {
    const proxyURL= `https://api.allorigins.win/get?url=${encodeURIComponent(api_url)}`;
    try {
        const response = await fetch(proxyURL);
        const result= await response.json();
        const data= JSON.parse(result.contents);
        // console.log(data)
        quote.innerHTML=`"${data.quote.body}"`;
        author.innerHTML=`"${data.quote.author}"`;
    }
    catch(err){
        console.error("error fetching quote",err);
        quote.innerHTML = "Failed to load quote.";
        author.innerHTML = "";
    }
   
}

getquote();

newQuotebtn.addEventListener("click",()=> getquote());