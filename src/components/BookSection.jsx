import React from 'react';
import axios from 'axios';  // Ensure axios is imported

const BookSection = ({ data, fetchData }) => {  // Ensure fetchData is passed as a prop

  // Handle Delete
  const handleDelete = async (id) => {
    console.log("Deleting book with ID:", id);  // Debug log
    try {
      const response = await axios.delete(`http://localhost:1000/api/v1/deleteBook/${id}`);
      console.log("Delete Response:", response); // Debug log
      alert("Book deleted successfully");
      fetchData(); // Refresh data after deletion
    } catch (error) {
      console.error("Error deleting book:", error);
      alert("Failed to delete the book");
    }
  };

  // Handle Update
  const handleUpdate = async (id) => {
    const updatedBookData = {
      bookname: prompt("Enter new book name:"),
      price: prompt("Enter new price:"),
    };
    console.log("Updated Book Data:", updatedBookData);  // Debug log

    if (updatedBookData.bookname && updatedBookData.price) {
      try {
        const response = await axios.put(`http://localhost:1000/api/v1/updateBook/${id}`, updatedBookData);
        console.log("Update Response:", response); // Debug log
        alert("Book updated successfully");
        fetchData(); // Refresh data after updating
      } catch (error) {
        console.error("Error updating book:", error);
        alert("Failed to update the book");
      }
    } else {
      alert("Please provide valid book details.");
    }
  };

  return (
    <div className='d-flex justify-content-around align-items-center flex-wrap my-3'>
      {data && data.map((item, index) => (
        <div key={index} className="m-3" style={{ width: "200px", height: "350px", border: "1px solid white", borderRadius: "20px" }}>
          <div>
            <img style={{ width: "200px", height: "210px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }} className="img-fluid" src={item.image} alt={item.bookname} />
          </div>
          <h6 style={{ fontSize: "15px" }} className='text-white px-2 my-1'>
            {item.bookname.slice(0, 150)}....
          </h6>
          <b style={{ fontSize: "30px", color: "white" }} className='px-2'>Rs. {item.price}</b>
          <div className='d-flex justify-content-around align-items-center my-4'>
            <button className='btn btn-light' onClick={() => handleUpdate(item._id)}>UPDATE</button> {/* Use handleUpdate */}
            <button className='btn btn-danger' onClick={() => handleDelete(item._id)}>DELETE</button> {/* Use handleDelete */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookSection;
