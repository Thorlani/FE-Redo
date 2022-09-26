import React from "react";
import CKeditor from "./components/CKeditor"
import { useState, useEffect } from "react"
import axios from "axios";
import styles from "./Loader.module.css"


const Account = () => {

  const [course, setCourse] = useState('contract')

  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  const [post, setPost] = useState({
    question: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setEditorLoaded(true);
  }, []);


  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setPost(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
  }

  const contractSubmit = async (event) => {
    setIsLoading(true)
    const body = {
      question: post.question,
      answer: data
    }
    try {
      event.preventDefault()
      axios.post('https://be-law-pq.vercel.app/api/postContract', body)
      .then(res => {
        setIsLoading(false)
        window.location.reload(true)
      })
    } catch (error) {
      setIsLoading(false)
      window.alert(error)
      console.log(error)
    }
  }

  const consLawSubmit = async (event) => {
    setIsLoading(true)
    const body = {
      question: post.question,
      answer: data
    }
    try {
      event.preventDefault()
      axios.post('https://be-law-pq.vercel.app/api/postConstitutional', body)
      .then(res => {
        setIsLoading(false)
        window.location.reload(true)
      })
    } catch (error) {
      setIsLoading(false)
      window.alert(error)
      console.log(error)
    }
  }

  const legalSystemSubmit = async (event) => {
    setIsLoading(true)
    const body = {
      question: post.question,
      answer: data
    }
    try {
      event.preventDefault()
      axios.post('https://be-law-pq.vercel.app/api/postLegal', body)
      .then(res => {
        setIsLoading(false)
        window.location.reload(true)
      })
    } catch (error) {
      setIsLoading(false)
      window.alert(error)
      console.log(error)
    }
  }


  return (
    <>
      {
        isLoading && (
          <div className="w-full min-h-[100vh] bg-black-rgba fixed top-0 z-20 flex justify-center items-center">
            <div className={styles.spinner}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
          </div>
        )
      }
      <div className="px-[8%] my-[100px] relative z-10">
        <div className="w-full flex justify-around mb-[60px]">
          <button onClick={() => {setCourse('contract')}} className="px-3 py-2 bg-black text-white capitalize rounded cursor-pointer">Contract</button>
          <button onClick={() => {setCourse('constitutional law')}} className="px-3 py-2 bg-black text-white capitalize rounded cursor-pointer">Cons law</button>
          <button onClick={() => {setCourse('legal system')}} className="px-3 py-2 bg-black text-white capitalize rounded cursor-pointer">Legal system</button>
        </div>
        <h1 className="mb-[30px] font-extrabold text-2xl capitalize">
          {course}
        </h1>
        <>
          <form onSubmit={ course === 'contract' ? contractSubmit : course === 'constitutional law' ? consLawSubmit : course === 'legal system' ? legalSystemSubmit : null }>
            <div className="flex flex-col">
              <label htmlFor="question">Question</label>
              <input 
                type="text" 
                name="question"
                value={post.question}
                onChange={handleChange}
                className="w-full h-[42px] border-black border-[1px] mb-[30px] rounded indent-2 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="answer">Answer</label>
              <CKeditor
                name="description"
                onChange={(data) => {
                  setData(data);
                }}
                editorLoaded={editorLoaded}
              />
            </div>
            <div className="w-full flex justify-center items-center">
              <button type="submit" className="px-2 py-2 bg-black text-white rounded-md uppercase w-[60%] mt-[20px]">Submit</button>
            </div>
          </form>
          <div>
            <div dangerouslySetInnerHTML={{ __html: data}} />
          </div>
        </>
      </div>
    </>
  )
}

export default Account