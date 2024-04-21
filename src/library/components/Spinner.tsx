import { Rings } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Rings
        height="60"
        width="60"
        color="#0284c7"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}

export default Spinner