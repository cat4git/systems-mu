
  import data from '../mock/systems.json';
  import fetch from 'isomorphic-unfetch';

  export const getSystemInfo = () => {
    
    return (
      data["data"]
    )
  }
  
  export const getGraphInfo= async(id)=>{

    const data= await import( `../mock/charts/${id}.json`)
    const a=data.series
    // a[0].id =id
    console.log(a)
    return a
    

  }

  export const getAllPostIds=()=>{
    return ([
          {
            params: {
              id: 'air-compressor'
            }
          },
          {
            params: {
              id: 'ambient-conditions'
            }
          },
          {
            params: {
              id: 'compressed-air'
            }
          },
          {
            params: {
              id: 'electricity-main'
            }
          },
          {
            params: {
              id: 'energy-sources'
            }
          },
          {
            params: {
              id: 'machine'
            }
          },
          {
            params: {
              id: 'production'
            }
          },
          {
            params: {
              id: 'resources'
            }
          },
          {
            params: {
              id: 'silo'
            }
          },
          {
            params: {
              id: 'weather'
            }
          }
        ])

  }