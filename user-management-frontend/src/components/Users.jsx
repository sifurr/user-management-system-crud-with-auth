import { useState } from "react";
import { FaPencilAlt, FaTimes, FaUserPlus } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {

    const loadedUsers = useLoaderData();
    const  [users, setUsers]  = useState(loadedUsers);

    let serialID = 1;

    const handleDelete = id => {
        console.log(id)
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0 ){
                const remainingUsers = users.filter(user => user._id !== id);
                setUsers(remainingUsers);
                
                console.log("User deleted successfully!");
            }
        })
    }
    return (
        <div>
            <div className="mt-20">
                <Link className="inline-block mb-10" to={'/create-user'}>
                    <button className="capitalize font-bold text-white bg-gray-700 px-4 py-2 flex items-center gap-2">new user <span><FaUserPlus></FaUserPlus></span></button>
                </Link>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="font-bold text-lg">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map(user =>
                                    <tr key={user._id} className="text-black">
                                        <th>{serialID++}</th>
                                        <td>{user?.name}</td>
                                        <td>{user?.email}</td>
                                        <td>{user?.gender}</td>
                                        <td>{user.status}</td>
                                        <td>
                                            <span className="btn rounded-none mr-2"><FaPencilAlt></FaPencilAlt></span>
                                            <span onClick={() => handleDelete(user?._id)} className="btn rounded-none mr-2"><FaTimes></FaTimes></span>
                                        </td>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;