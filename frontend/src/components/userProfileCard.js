function userProfileCard() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="card">
        <div class="cat">
          <img className="huehue" src="https://loremflickr.com/300/300" />
        </div>
        <hr />
        <div className="userInfo">
          <h1>John Doe</h1>
          <p className="title">CEO &amp; Founder, Example</p>
          <p>Harvard University</p>
        </div>
      </div>
    </div>
  );
}

export default userProfileCard;
