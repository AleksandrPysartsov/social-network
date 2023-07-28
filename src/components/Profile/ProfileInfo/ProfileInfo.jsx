import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          alt="Photo"
        />
      </div>
      <div className={style.description}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
