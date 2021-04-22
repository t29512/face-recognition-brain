const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        Mr.Barin will recognize faces in your your pictures. Give it a try!
      </p>
      <div className='center shadow-5 mw7'>
        <input
          className='f4 pa2 w-70'
          type='text'
          placeholder='https://www.pictureplease.com'
          onChange={onInputChange}
        />
        <button
          className='f4 ph3 pv2 br1 b--black-05 w-30 dim link bg-light-purple light-gray'
          onClick={onButtonSubmit}
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;