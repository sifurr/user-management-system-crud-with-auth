import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const CreateUser = () => {

    const handleCreateUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const gender = form.gender.value;
        const status = form.status.value;
        const user = {name, email, gender, status}
        console.log(user);

        fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                console.log("User saved successfully!");
                form.reset();
            }
        })
      
    }
    return (
        <div>
            <div className="mt-20">
                <Link className='inline-block mb-5' to={'/'}>
                    <span className="text-left text-black font-bold flex gap-3 items-center"> <FaArrowLeft></FaArrowLeft> All Users </span>
                </Link>
            </div>
            <div className='text-center'>
                <h2 className="text-3xl text-black text-center">New User</h2>
                <p className='text-gray-400'>Use the form to create a new user</p>
            </div>
            <form onSubmit={handleCreateUser}>
                <div className='w-2/3 mx-auto'>
                    {/* first row */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-white label-text">Your Name</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <span className="text-black">Name</span>
                            <input type="text" name='name' placeholder="your name" className="input input-bordered text-black" />
                        </label>
                    </div>
                    {/* second row */}
                    <div className="form-control">
                        <label className="label">
                            <span className="text-white label-text">Your Email</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <span className="text-black">Email</span>
                            <input type="text" name='email' placeholder="your email" className="input input-bordered text-black" />
                        </label>
                    </div>
                    {/* third row */}

                    <div className="form-control mt-8">
                        <label className="input-group">
                            <span className="text-black">Gender</span>
                            <input type="radio" value="male" name="gender" className="radio ml-4" checked />
                            <span className='text-black'>Male</span>
                            <input type="radio" name="gender" value="female" className="radio ml-4" /><span className='text-black'>Female</span>
                        </label>
                    </div>

                    {/* fourth row */}
                    <div className="form-control mt-8">
                        <label className="input-group">
                            <span className="text-black">Status</span>
                            <input type="radio" value="active" name="status" className="radio ml-4" checked />
                            <span className='text-black'>Active</span>
                            <input type="radio" value="inactive" name="status" className="radio ml-4" />
                            <span className='text-black'>Inactive</span>
                        </label>
                    </div>
                    {/* fourth row */}
                    <div className="form-control mt-8">
                        <label className="input-group">
                            <input className='btn btn-block' type="submit" value="Save" />
                        </label>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default CreateUser;