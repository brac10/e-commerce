import React from 'react'

export default function Title({name, title}) {
  return (
    <div classname="row">
      <div className="col-10 mx-auto my-2 text-center text-title">
      <h1 classname="text-capitalize font-weight-bold">
       {name}<strong className="text-blue">&nbsp;{title}</strong>
      </h1>
      </div>
    </div>
  )
}
