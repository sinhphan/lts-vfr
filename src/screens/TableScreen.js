import { memo, useState } from 'react';
import { ChevronDoubleUpIcon, ChevronUpDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
const TableScreen = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearchChange = (e)=>{
    const keyword = e.currentTarget.value;
    setSearchKeyword(keyword);
  }
  return (
    <>
      <div className="antialiased font-sans bg-gray-200">
        <div className="mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="my-2 flex sm:flex-row flex-col">
              <div className="block relative">
                <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current text-gray-500"
                  >
                    <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                  </svg>
                </span>
                <input
                  placeholder="Search"
                  className="appearance-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  value={searchKeyword}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead className="text-sm font-medium">
                    <tr>
                      <th className="text-right border-b border-gray-200 bg-neutral-100 text-gray-600"></th>
                      <th className="pr-4 pl-2 py-3 text-right border-b border-gray-200 bg-neutral-100 text-gray-600">
                        <p className="text-left">P</p>
                      </th>
                      <th className="pr-4 pl-2 py-3 border-b border-gray-200 bg-neutral-100 text-gray-600 w-20">
                        <i className="fa-solid fa-sort w-6 h-6 float-right py-1 text-gray-300"></i>
                        <p className="float-right">#</p>
                      </th>
                      <th className="pr-4 pl-2 py-3 text-left border-b border-gray-200 bg-neutral-100 text-gray-600">
                        <p className="float-left">Name</p>
                        <i className="fa-solid fa-sort-up w-4 w-4 float-right py-1 text-indigo-500"></i>
                      </th>
                      <th className="pr-4 pl-2 py-3 text-right border-b border-gray-200 bg-neutral-100 text-gray-600">
                        <p className="float-left">Forename</p>
                        <i className="fa-solid fa-sort w-6 h-6 float-right py-1 text-gray-300"></i>
                      </th>
                      <th className="pr-4 pl-2 py-3 text-right border-b border-gray-200 bg-neutral-100 text-gray-600 w-32">
                        <i className="fa-solid fa-sort w-6 h-6 float-right py-1 text-gray-300"></i>
                        <p className="float-right px-2">Birth</p>
                      </th>
                      <th className="pr-4 pl-2 py-3 text-left border-b border-gray-200 bg-neutral-100 text-gray-600">
                        Phones
                      </th>
                      <th className="pr-4 pl-2 py-3 text-left border-b border-gray-200 bg-neutral-100 text-gray-600">
                        Comment
                      </th>
                      <th className="pr-4 pl-2 py-3 text-right border-b border-gray-200 bg-neutral-100 text-gray-600">
                        <i className="fa-solid fa-sort w-6 h-6 float-right py-1 text-gray-300"></i>
                        <p className="float-right">Amount due</p>
                      </th>
                      <th className="pr-4 pl-2 py-3 text-right border-b border-gray-200 bg-neutral-100 text-gray-600">
                        Reliability
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-light">
                    <tr>
                      <td className="pr-3 pl-2 py-2 bg-white text-sm w-1">
                        <i className="fa-solid fa-circle"></i>
                      </td>
                      <td className="pr-3 pl-2 py-2 bg-white text-sm">
                        <p className="text-left ">DEN</p>
                      </td>
                      <td className="pr-3 pl-2 py-2 bg-white text-sm">
                        <p className="text-right text-gray-900 whitespace-no-wrap">
                          1
                        </p>
                      </td>
                      <td className="text-left pr-3 pl-2 py-2 bg-white text-sm">
                        <p className=" text-gray-900 whitespace-no-wrap">
                          SDGGDSDS
                        </p>
                      </td>
                      <td className="pr-3 pl-2 py-2 bg-white text-sm">
                        <p className="text-left text-gray-900 whitespace-no-wrap">
                          abcdef
                        </p>
                      </td>
                      <td className="pr-3 pl-2 py-2 bg-white text-sm">
                        <p className="text-right">1994-02-29</p>
                      </td>
                      <td className="pr-3 pl-2 py-2 bg-white text-sm">
                        <p className="text-left">0123456789</p>
                      </td>
                      <td className="pr-3 pl-2 py-2 bg-white text-sm">
                        <p>This is comment</p>
                      </td>
                      <td className="pr-3 pl-2 py-2 bg-white text-sm">
                        <p className="text-right ">0.00</p>
                      </td>
                      <td className="text-right pr-3 pl-2 py-3 bg-white text-sm">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-blue-600 h-2.5 rounded-full w-0"></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pr-3 pl-2 py-2 bg-white text-sm w-1">
                        <i className="fa-solid fa-circle"></i>
                      </td>
                      <td className="pr-3 pl-2 py-2 bg-white text-sm">
                        <p className="text-left ">DEN</p>
                      </td>
                      <td className="pr-3 pl-2 py-2 bg-white text-sm">
                        <p className="text-right text-gray-900 whitespace-no-wrap">
                          1
                        </p>
                      </td>
                      <td className="text-left pr-3 pl-2 py-2 bg-white text-sm">
                        <p className=" text-gray-900 whitespace-no-wrap">
                          SDGGDSDS
                        </p>
                      </td>
                      <td className="pr-3 pl-2 py-2 bg-white text-sm">
                        <p className="text-left text-gray-900 whitespace-no-wrap">
                          abcdef
                        </p>
                      </td>
                      <td className="pr-3 pl-2 py-2 bg-white text-sm">
                        <p className="text-right">1994-02-29</p>
                      </td>
                      <td className="pr-3 pl-2 py-2 bg-white text-sm">
                        <p className="text-left">0123456789</p>
                      </td>
                      <td className="pr-3 pl-2 py-2 bg-white text-sm">
                        <p>This is comment</p>
                      </td>
                      <td className="pr-3 pl-2 py-2 bg-white text-sm">
                        <p className="text-right ">0.00</p>
                      </td>
                      <td className="text-right pr-3 pl-2 py-3 bg-white text-sm">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-blue-600 h-2.5 rounded-full w-0"></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pr-3 pl-2 py-2 bg-white text-sm w-1">
                        <i className="fa-solid fa-circle"></i>
                      </td>
                      <td className="pr-3 pl-2 py-2 bg-white text-sm">
                        <p className="text-left ">DEN</p>
                      </td>
                      <td className="pr-3 pl-2 py-2 bg-white text-sm">
                        <p className="text-right text-gray-900 whitespace-no-wrap">
                          1
                        </p>
                      </td>
                      <td className="text-left pr-3 pl-2 py-2 bg-white text-sm">
                        <p className=" text-gray-900 whitespace-no-wrap">
                          SDGGDSDS
                        </p>
                      </td>
                      <td className="pr-3 pl-2 py-2 bg-white text-sm">
                        <p className="text-left text-gray-900 whitespace-no-wrap">
                          abcdef
                        </p>
                      </td>
                      <td className="pr-3 pl-2 py-2 bg-white text-sm">
                        <p className="text-right">1994-02-29</p>
                      </td>
                      <td className="pr-3 pl-2 py-2 bg-white text-sm">
                        <p className="text-left">0123456789</p>
                      </td>
                      <td className="pr-3 pl-2 py-2 bg-white text-sm">
                        <p>This is comment</p>
                      </td>
                      <td className="pr-3 pl-2 py-2 bg-white text-sm">
                        <p className="text-right ">0.00</p>
                      </td>
                      <td className="text-right pr-3 pl-2 py-3 bg-white text-sm">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-blue-600 h-2.5 rounded-full w-0"></div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(TableScreen);
