import { BlogPost } from './blog-post';

// New Blog Template
/*
    {
        id: 0,
        title: "",
        tagline: "",
        date: "",
        abstract: 
            "",
        mediaPath: "",
        bodyParagraphs: 
        [
            
        ]
    },
*/

// New Blog Paragraph Template
/*
            {
                hasSubheading: false,
                subheading: "",
                hasImage: false,
                mediaPath: "",
                isItalic: false,
                text:
                ""
            },
*/

export const BLOGSLIST: BlogPost[] = [
    {
        id: 1,
        urlTitle: "minimum-viable-gaming",
        title: "\"Minimum Viable Gaming\"",
        tagline: "and the Evolution of Early-Access",
        date: "March 5th, 2019",
        abstract:
            "Piece developed for COMM 200: Intro to Media Writing. Explores the complex relationship between developers and players with the games-as-a-service model. Compares and contrasts Fallout 76 and Terraria to understand how community engagement helps make stellar titles stand out.",
        mediaPath: "/assets/img/blog/minimum-viable-gaming/fallout4.jpg",
    },
    {
        id: 2,
        urlTitle: "the-monetization-of-gaming-moments",
        title: "The Monetization of Gaming \"Moments\"",
        tagline: "or why everyone is playing Fortnite",
        date: "April 25th, 2019",
        abstract: 
            "Research editorial written for COMM 200: Intro to Media Writing. This piece is both an examination and a prediction of mainstream gaming--what drives certain genres and titles to be popular at any one time. In it, I am able to make ties to some of my favorite titles and delve into why they generate stories I still talk about today. I enjoyed making this editorial so much, I even created a video essay on the same topic (which you can find under my portfolio!)",
        mediaPath: "/assets/img/portfolio/moments.jpg",
    },
    {
        id: 3,
        urlTitle: "an-8-bit-arguement-for-art",
        title: "An 8-Bit Arguement for Art",
        tagline: "Video games can be more than just fun",
        date: "August 10th, 2019",
        abstract: 
            "This is a piece I've been working on for around two years now. I've written and re-written out the concept many times, reiterating my thoughts each time. The crux of the arguement is not one unfamilar to people in the entertainment industry--video games can contain deep and thoughtful messages--but this has been my take on introducing it in more academic settings. Therefore, the introductions/descriptions of some of the examples may seem contrived for gamers, but it should be helpful for those outside of the subculture. Original art courtesy of Jacob van Ruisdael, supplied by The Metropolitan Museum of Art, New York",
        mediaPath: "/assets/img/blog/an-8-bit-arguement-for-art/pixelart.jpg",
    },
    {
        id: 4,
        urlTitle: "what-the-golf-and-strokes-of-genius",
        title: "WHAT THE GOLF? and Strokes of Genius",
        tagline: "From golf pars to race cars and all in-between",
        date: "January 5th, 2020",
        abstract: 
            "",
        mediaPath: "/assets/img/blog/what-the-golf-and-strokes-of-genius/wtg-blog.jpg",
    }
]