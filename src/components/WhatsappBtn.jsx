const WhatsappBtn = () => {
  return (
    <a
      target='_blank'
      href='https://api.whatsapp.com/send?phone=999999999'
      className='block fixed bottom-8 right-8 w-20 h-20 cursor-pointer'
    >
      <img src='whatsapp.png' alt='logo whatsapp' />
    </a>
  );
};

export default WhatsappBtn;
