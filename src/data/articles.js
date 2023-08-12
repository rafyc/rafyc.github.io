import React from "react";

function article_1() {
  return {
    date: "Mar 2, 2022",
    link: "https://medium.com/@4318_26766/c-language-and-static-libraries-4aa28f7ec3da",
    title: "C language and static libraries",
    description:
      "When we have a collection of C programs, like books, we want to create a library to store them. Unix systems permit the creation of two types of libraries : static and shared. ",
    keywords: [
      "C language",
      "static libraries",
      "low level",
      "Raphaël Chemouni",
    ],
    style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
    body: (
      <React.Fragment>
        <div className="article-content">
          <div className="paragraph">Content of article 1</div>
          <img
            src="https://picsum.photos/200/300"
            alt="random"
            className="randImage"
          />
        </div>
      </React.Fragment>
    ),
  };
}

function article_2() {
  return {
    date: "May 9, 2022",
    link: "https://medium.com/@4318_26766/creating-and-using-dynamic-libraries-in-c-language-912b078b7c52",
    title: "Creating and Using Dynamic Libraries in C language",
    description:
      "The main difference from Static Libraries and Dynamic Libraries in Static, the linker makes a copy of all of the selected functions for the library to the executable file and in Dynamic it is not necessary. ",
    style: ``,
    keywords: [
      "Creating and Using Dynamic Libraries in C language",
      "C language",
      "Raphaël C",
      "Raphaël Chemouni",
    ],
    body: (
      <React.Fragment>
        <h1>Content of article 2</h1>
      </React.Fragment>
    ),
  };
}

function article_3() {
  return {
    date: "May 9, 2022",
    link: "https://medium.com/@4318_26766/python3-mutable-immutable-everything-is-oops-fe4e833adbb8",
    title: "Python3 : Mutable, Immutable… everything is OOPs!",
    description:
      "Objects are Python’s abstraction for data. All data in a Python program is represented by objects or by relations between objects. Every object has an identity, a type and a value. An object’s identity never changes once it has been created. You may think of it as the object’s address in memory.",
    style: ``,
    keywords: [
      "Python3 : Mutable, Immutable",
      "object python",
      "Raphaël C",
      "Raphaël Chemouni",
    ],
    body: (
      <React.Fragment>
        <h1>Content of article 2</h1>
      </React.Fragment>
    ),
  };
}

function article_4() {
  return {
    date: "Jul 3, 2022",
    link: "https://medium.com/@4318_26766/recursion-and-how-it-works-on-the-stack-bdcdce726331",
    title: "Recursion and how it works on the stack.",
    description:
      "To understand recursion, one must first understand recursion. A recursive function is one that calls itself. Let me try to explain with an example : Search a key in boxes.",
    style: ``,
    keywords: [
      "Recursion and how it works on the stack.",
      "programming",
      "Raphaël C",
      "Raphaël Chemouni",
    ],
    body: (
      <React.Fragment>
        <h1>Content of article 2</h1>
      </React.Fragment>
    ),
  };
}


function article_5() {
  return {
    date: "Sep 5, 2022",
    title: "What happens when you type google.com in your browser and press Enter",
    link: "https://medium.com/@4318_26766/what-happens-when-you-type-google-com-in-your-browser-and-press-enter-ac0d01096b69",
    description:
      "Whether you are an engineer, developer, marketer, or even in sales, it is always good to have a basic understanding of what is going on behind our browsers and how information is transferred to our computers via the internet.",
    style: ``,
    keywords: [
      "Web developper",
      "Web programming",
      "Raphaël C",
      "Raphaël Chemouni",
    ],
    body: (
      <React.Fragment>
        <h1>Content of article 2</h1>
      </React.Fragment>
    ),
  };
}

function article_6() {
  return {
    date: "Sep 30, 2022",
    link: "https://medium.com/@4318_26766/do-you-know-stem-careers-e8b59576f06e",
    title: "Do you know STEM careers ?",
    description:
      "Do you know what STEM jobs are? For those who are unfamiliar with this acronym, the term can be a bit confusing. STEM stands for Science. Technology. Engineering. Math. All of the jobs in this niche fall under one of those broad categories. STEM jobs are highly coveted and in demand careers that are paving the way for the future.",
    style: ``,
    keywords: [
      "Do you know STEM careers",
      "job",
      "Raphaël C",
      "Raphaël Chemouni",
    ],
    body: (
      <React.Fragment>
        <h1>Content of article 2</h1>
      </React.Fragment>
    ),
  };
}

function article_7() {
  return {
    date: "5 Apr 24",
    title: "Designer language — research",
    link: "https://medium.com/@4318_26766/designer-language-research-b803345740df",
    description:
      "After reviewing the business’ goals at the end of last quarter, the Research team wants to identify if we have an opportunity to make users’ stream more content. They have identified a challenge which they think is worth exploring: “Improve how Spotify users find music to listen to. ”With this in mind, the UX Research team gathered data and conducted user interviews.",
    style: ``,
    keywords: [
      "Designer language — research",
      "UX UI design",
      "Raphaël C",
      "Raphaël Chemouni",
    ],
    body: (
      <React.Fragment>
        <h1>Content of article 2</h1>
      </React.Fragment>
    ),
  };
}


const myArticles = [article_1, article_2, article_3, article_4, article_5, article_6, article_7];

export default myArticles;
