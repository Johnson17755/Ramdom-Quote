  let quotes = {
        '― Albert Einstein' : '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty."',
        '― Jules Renard, The Journal of Jules Renard' : '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse"',
        '― Lana Del Rey' : '"Who are you? Are you in touch with all of your darkest fantasies? Have you created a life for yourself where you can experience them?"',
        '- Carrie Bradshaw' : '"Maybe some women aren/t meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them."',
        '― Pierce Brown, Red Rising' : '"Man cannot be freed by the same injustice that enslaved it."',
        '- Deepak Chopra' : '"Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions."',
        '― Madeline Miller, The Song of Achilles' : '"Bury us, and mark our names above. Let us be free."',
        '― Monique Duval' : '"She decided to free herself, dance into the wind, create a new language. And birds fluttered around her, writing “yes” in the sky."',
        '― Aaron Lauritsen' : '"The struggles we endure today will be the ‘good old days’ we laugh about tomorrow."',
        '― C.S. Lewis' : '"I was not born to be free---I was born to adore and obey."',
        '― John Galsworthy' : '"Life calls the tune, we dance."',
        '― Jenny Valentine, Broken Soup' : '"Even when you’d lost everything you thought there was to lose, somebody came along and gave you something for free."'
    }
    
        const generate = () =>{
            let quotesElement = document.querySelector('.quotes');
            let quoteElement = quotesElement.querySelector('p');
            let authorElement = quotesElement.querySelector('.author');

            let authors = Object.keys(quotes);
            let author = authors[Math.floor(Math.random() * authors.length)];
            let quote = quotes[author];

            quoteElement.innerHTML = quote;
            authorElement.innerHTML = author;
        }

