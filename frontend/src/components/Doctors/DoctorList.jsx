import DoctorCard from './DoctorCard.jsx';

import { BASE_URL } from './../../config';
import useFetchData from './../../hooks/useFetchData.jsx';
import Loader from '../../components/Loader/Loading.jsx';
import Error from '../../components/Error/Error.jsx';

const DoctorList = () => {
    const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors`);

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
    
      { !loading && !error && (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
          {(doctors?.length > 0) ?(
          doctors.map(doctor => (
              <DoctorCard key={doctor._id} doctor={doctor} />
          ))
        ) : (
          
          <p>No doctors found.</p>
        )}
      </div>
    )}
    </>
  );
}

export default DoctorList