import { FaPencilAlt, FaTimes, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Users = () => {
    return (
        <div>
            <div className="mt-20">
                <Link className="inline-block mb-10" to={'/create-user'}>
                    <button className="capitalize font-bold text-white bg-gray-700 px-4 py-2 flex items-center gap-2">new user <span><FaUserPlus></FaUserPlus></span></button>
                </Link>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
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
                            <tr className="text-black">
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>john@vaugn.com</td>
                                <td>Blue</td>
                                <td>Blue</td>
                                <td>
                                    <span className="btn rounded-none mr-2"><FaPencilAlt></FaPencilAlt></span>
                                    <span className="btn rounded-none mr-2"><FaTimes></FaTimes></span>
                                </td>
                            </tr>                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;