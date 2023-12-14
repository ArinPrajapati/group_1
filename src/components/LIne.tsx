
const LIne = () => {
  return (
    <>
      <div className="line">
        <ul>
          <li className="active">All Post(32)</li>
          <li>Article</li>
          <li>Event</li>
          <li>Education</li>
          <li>Job</li>
        </ul>

        <div className="joinwriteBtn">
          <button className="writeBtn">
            Write a Post{" "}
            <img
              src="https://www.svgrepo.com/show/350491/drop-down.svg"
              alt=""
            />
          </button>
          <button className="joinbtn">
            {" "}
            <img
              src="https://cdn.iconfinder.com/stored_data/1421748/128/png?token=1702461105-koTHc%2FgzPNmYlHfRmCJ5VMeaYEYM%2BQWXT0kz%2BQC6w2A%3D"
              alt=""
            />
            Join Group
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default LIne;
