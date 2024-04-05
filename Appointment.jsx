import {useState} from 'react';
import data from './data';

const SearchAndFilterComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState({
    fName: '',
    lName: '',
    age: '',
    address: '',
    contact: '',
  });
 
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
 
  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
    setSearchTerm('');
  };
 
  const filteredPatients = data.filter((patient) =>
    patient.firstName.toLowerCase().includes(searchTerm.toLowerCase()),
  );
 
  return (
    <div className="container mx-auto p-4 w-[600px] bg-white rounded-xl shadow-2xl">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search patient name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full rounded-md border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
        />
        {searchTerm && (
          <div className="absolute z-10 mt-1 rounded-md border bg-slate-200 w-60 h-44 overflow-scroll overflow-x-hidden shadow-lg">
            {filteredPatients.map((patient) => (
              <div
                key={patient.id}
                onClick={() => handlePatientSelect(patient)}
                className="cursor-pointer p-2 hover:bg-gray-100"
              >
                {patient.firstName}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="mb-1 block">
          First Name :
        </label>
        <input
          type="text"
          id="name"
          value={selectedPatient.firstName}
          className="w-full rounded-md border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="mb-1 block">
          Last Name :
        </label>
        <input
          type="text"
          id="name"
          value={selectedPatient.lastName}
          className="w-full rounded-md border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="age" className="mb-1 block">
          Age
        </label>
        <input
          type="text"
          id="age"
          value={selectedPatient.age}
          className="w-full rounded-md border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contact" className="mb-1 block">
          Gender
        </label>
        <input
          type="text"
          id="contact"
          value={selectedPatient.gender}
          className="w-full rounded-md border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="mb-1 block">
          Address
        </label>
        <input
          type="text"
          id="address"
          value={selectedPatient.address}
          className="w-full rounded-md border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
    </div>
  );
};
 
export default SearchAndFilterComponent;
 




// import data from './data';
// import {useState} from 'react';
// const AppointmentBox = () => {
//   const [search, setSearch] = useState('');
//   const [isHidden, setIsHidden] = useState('hidden');
//   const [fieldData, setFieldData] = useState({
//     fName: '',
//     lName: '',
//     gender: '',
//     age: '',
//     address: '',
//   });

//   function handleOnFieldChange(e) {
//     setSearch(e.target.value);

//     if (search === '') {
//       console.log('hide');
//       setIsHidden(' hidden');
//     } else {
//       console.log('show');
//       setIsHidden('');
//     }
//   }

//   function handleClick(person) {
//     // console.log(person.firstName);
//     setIsHidden(' hidden');
//     setSearch('');
//     setFieldData({
//       fName: person.firstName,
//       lName: person.lastName,
//       age: person.age,
//       gender: person.gender,
//       address: person.address,
//     });
//   }
//   return (
//     <div className="h-[500px] w-[600px] rounded-2xl bg-white pt-5 shadow-xl">
//       <div className="mx-3 ">
//         {/*Fields container*/}
//         <div className="flex justify-center gap-4 pb-2">
//           <h1>Search Patient : </h1>
//           <input
//             name=""
//             className="bg-slate-100"
//             type="text"
//             value={search}
//             onChange={handleOnFieldChange}
//             // onClick={handleClick}
//           />

//           <div
//             className={
//               'absolute ml-56 mt-8 h-40 w-40 overflow-scroll overflow-x-hidden rounded-lg bg-slate-200 shadow-lg ' +
//               isHidden
//             }
//           >
//             {data
//               .filter((item) => {
//                 return search.toLowerCase() === ''
//                   ? item
//                   : item.firstName.toLowerCase().includes(search.toLowerCase());
//               })
//               .map((item, idx) => (
//                 // data field
//                 <div
//                   className="flex items-center justify-center py-1 hover:cursor-pointer hover:bg-slate-400"
//                   key={idx}
//                   onClick={() => handleClick(item)}
//                 >
//                   <h2>{item.firstName}</h2>
//                 </div>
//               ))}
//           </div>
//         </div>

//         <div className="flex justify-center gap-5">
//           {/* Row 1 fName and lName */}
//           <div className="flex gap-4 py-2">
//             <h1>First name : </h1>
//             <input
//               name="fName"
//               className="bg-slate-100"
//               type="text"
//               value={fieldData.fName}
//             />
//           </div>
//           <div className="flex gap-4 py-2">
//             <h1>Last name : </h1>
//             <input
//               name="lName"
//               className="bg-slate-100"
//               type="text"
//               value={fieldData.lName}
//             />
//           </div>
//         </div>

//         <div className='flex justify-center'>
//           <div className="flex gap-4 py-2">
//             <h1 className='mr-4'>Gender : </h1>
//             <input
//               name="gender"
//               className="bg-slate-100"
//               type="text"
//               value={fieldData.gender}
//             />
//           </div>
//           <div className="flex gap-4 py-2">
//             <h1>Age : </h1>
//             <input
//               name="age"
//               className="bg-slate-100"
//               type="text"
//               value={fieldData.age}
//             />
//           </div>
//         </div>

//         <div className='w-[6
          
          
//           00px] h-[100px]'>
//           <div>

//           </div>
//           <div>

//           </div>
//           <div>

//           </div>
//           <div>

//           </div>
//         </div>





//         <div className="flex gap-4 py-2">
//           <h1>Address : </h1>
//           <input
//             name="address"
//             className="bg-slate-100"
//             type="text"
//             value={fieldData.address}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppointmentBox;
