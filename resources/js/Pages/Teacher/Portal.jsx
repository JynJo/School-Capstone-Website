import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useForm, Head } from '@inertiajs/react';

function Portal({ error }) {
  const { post, data, setData, errors } = useForm({
    email: '',
    password: '',
  });

  const submitHandler = (e) => {
    e.preventDefault();
    post(route('teacher.login'));
  };

  return (<>
    <Head title="Teacher Portal"/>
<div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-[90vh]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="/images/lc-seal.png"
            className="mx-auto h-20 w-auto"

          />
          <h2 className="text-center text-2xl/9 font-bold tracking-wider text-pink-900 mt-2" style={{ fontFamily: ' "Faculty Glyphic"'}}>
            LC: Teacher Portal
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <div className="mt-2">
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}

                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-pink-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={data.password}
                    onChange={e => setData('password', e.target.value)}
                    autoComplete="current-password"
                    placeholder="Password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-pink-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={submitHandler}
                className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm/6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                Sign in
              </button>
            </div>
          </form>

                 </div>
      </div>

  </>);
}

export default Portal;
