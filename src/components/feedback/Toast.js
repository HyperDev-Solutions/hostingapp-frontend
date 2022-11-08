import React,{useEffect} from 'react'

const Toast = ({setToast,message}) => {
  useEffect(()=>{
    setTimeout(()=>{
      setToast(false);
    },6000)
  })
  return (
    <div id="toast-danger" class=" fixed bottom-0 left-2 flex items-center p-4 mb-4 w-full max-w-xs text-white bg-red-600 rounded-lg shadow " role="alert">
    <div class="ml-3 text-sm font-normal">{message}</div>
    <button
    onClick={(e)=>setToast(false)}
     type="button" 
     class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-full focus:ring-2 focus:ring-gray-300 p-1 hover:bg-gray-100 inline-flex " data-dismiss-target="#toast-danger" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
</div>
  )
}

export default Toast