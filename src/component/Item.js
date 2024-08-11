import "../asset/style/Item.css";
import Tool from "./Tool";

function Item({data}) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let created_date = new Date(data.created_at);
    let updated_date = new Date(data.updated_at);
  return (
    <div className="item-card">
      <h2 className="item-heading">{data.name}</h2>
      <p>{data.description}</p>
      <Tool tools={data.topics} />
      <div className="date">
        <span>Created at {months[created_date.getMonth()] +"  "+ created_date.getDate()+ ", "+ created_date.getFullYear()}</span>
        <span>Updated at {months[updated_date.getMonth()] +"  "+ updated_date.getDate()+ ", "+ updated_date.getFullYear()}</span>
      </div>
    </div>
  );
}

export default Item;
