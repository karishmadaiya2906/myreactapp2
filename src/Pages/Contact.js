import React  ,{useState}from 'react'
import Layout from '../Components/Layout/Layout'
import './../Styles/FAQ.css'
import  FAQ from './../Pages/FAQ'


const Contact = () => {
  const [faqs,setFaqs]=useState([

    {

      question: "How many programmers does it take to screw a lightbulb?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: true
    },
    {
      question: "How many programmers does it take to screw a lightbulb?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: true
    },
    {
      question: "How many programmers does it take to screw a lightbulb?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: true
    },
    {
      question: "How many programmers does it take to screw a lightbulb?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: true
    },
  ]);

  const toggleFAQ = index =>{
    setFaqs(
      faqs.map((faq , i)=>{
        if(i === index){
          faq.open =! faq.open;
        }
        else{
          faq.open =false;
        }
        return faq;
      })
    );
  };
  return (
    <>
    <div className='body'>
    <div className='main-container'>
    <div className='faqs'>
<h1> Frequently Asked Question</h1>
 
  

{faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
</div>
<div className="container-right">
          <h1>Don’t find your answer, Ask for support.</h1>

          <p>Interdum et malesuada fames ac ante ipsum primis in
             faucibus. Sed molestie accumsan dui, 
            non iaculis primis in faucibu raesent eget sem purus.</p>
            <input type='email' placeholder='Email'/> <br/><br/>
            <input type='text' placeholder='subject'/><br/><br/>
            <input type='message' placeholder='message'/><br/><br/>
            <button className="btn"> Contact us</button>
        </div>
        
</div>

</div>

    <Layout/>
    </>
  )
}

export default Contact
