import React from 'react';
import useBlog from './hooks/useBlog';

function BlogView() {
  const blogState = useBlog(1);
  
  console.log("Post State =>", blogState);
  if(blogState.loading) return <h2>Your data is laoding</h2>
  if(blogState.error) return <h2>{blogState.error}</h2>
    
  return (
    <div className="App">
       <header className="App-header">
            <p>{blogState.data?.title}</p>
 
            
            <button onClick={() => blogState.refetch()}>
                Refetch Data
            </button>
        </header>
    </div>
  );
}

export default BlogView;
