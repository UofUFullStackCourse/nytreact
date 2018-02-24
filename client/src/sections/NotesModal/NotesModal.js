import React, {Component} from "react";
import API from "../../utils/API";

class NotesModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            article: null,
            notes: []
        };
    }

    render() {
        return (
            <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Notes for this Article</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div></div>
                            <div id="notesSection">
                            </div>
                            <textarea className="form-control col-xs-12" rows="2" id="NoteText"></textarea>
                        </div>
                        <div className="modal-footer" id="modalfoot">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save Note</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}