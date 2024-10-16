import React from 'react'
import PropTypes from 'prop-types'

const Products = props => {
  return (
    <div className="px-4 py-6">
      <h1 className="text-4xl font-heading text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="border border-red-400 min-h-[300px] rounded"></div>
        <div className="border border-red-400 min-h-[300px] rounded"></div>
        <div className="border border-red-400 min-h-[300px] rounded"></div>
        <div className="border border-red-400 min-h-[300px] rounded"></div>
        <div className="border border-red-400 min-h-[300px] rounded"></div>
        <div className="border border-red-400 min-h-[300px] rounded"></div>
        <div className="border border-red-400 min-h-[300px] rounded"></div>
        <div className="border border-red-400 min-h-[300px] rounded"></div>
      </div>
    </div>
  );
}

Products.propTypes = {}

export default Products