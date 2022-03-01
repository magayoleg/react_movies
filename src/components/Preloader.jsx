import style from './Preloader.module.sass';

function Preloader() {
  return (
    <div className={`preloader-wrapper active ${style.preloader}`}>
      <div className="spinner-layer spinner-green-only">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div>
        <div className="gap-patch">
          <div className="circle"></div>
        </div>
        <div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
}

export { Preloader };
