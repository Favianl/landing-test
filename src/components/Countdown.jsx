import { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  function calculateTimeLeft(date) {
    const difference = new Date(date) - new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <p className='text-red-800 font-bold'>¡El tiempo ha terminado!</p>;
  }

  return (
    <div className='text-center'>
      <h2 className='text-2xl font-bold text-red-800 mb-4'>
        ¡Oferta Especial!
      </h2>
      <p className='mb-4'>Por tiempo limitado:</p>

      <div className='flex justify-center gap-4'>
        <div className='bg-black text-white p-8 rounded-lg'>
          <p className='text-5xl font-bold text-red-800'>{timeLeft.days}</p>
          <p>Días</p>
        </div>
        <div className='bg-black text-white p-8 rounded-lg'>
          <p className='text-5xl font-bold text-red-800'>{timeLeft.hours}</p>
          <p>Horas</p>
        </div>
        <div className='bg-black text-white p-8 rounded-lg'>
          <p className='text-5xl font-bold text-red-800'>{timeLeft.minutes}</p>
          <p>Minutos</p>
        </div>
        <div className='bg-black text-white p-8 rounded-lg'>
          <p className='text-5xl font-bold text-red-800'>{timeLeft.seconds}</p>
          <p>Segundos</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
