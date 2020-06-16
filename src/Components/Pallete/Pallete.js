import React from "react";
import "./Pallete.css";

const pallete = (props) => {
  return (
    <div class="modal fade " id="myModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title text-center">Pick Your Color!</h4>
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <div class="modal-body">
            <form className="form" onSubmit={props.addColor}>
              <div className="input-group ">
                <div className="w-100 p-2 my-2">
                  Color Code: {props.newShade}
                </div>
                <input
                  className="form-control my-2"
                  type="color"
                  name="colorCode"
                  value={props.code}
                  onChange={props.changed}
                />
              </div>
              <div className="input-group my-2">
                <input
                  className="form-control btn btn-success"
                  type="submit"
                  name="Add Color!"
                />
              </div>
            </form>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pallete;
