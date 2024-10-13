function Header(props) {
  let name = props.name;
  let designation = props.designation;
  let photoSrc = props.photoSrc;

  return (
    <div className="flex justify-between bg-blue-600 rounded-b-lg pt-4 pb-4">
      <div className="ml-3 flex flex-col justify-center text-white">
        <p className="text-3xl font-medium">{name}</p>
        <p className="text-xl">{designation}</p>
      </div>
      <img className="w-24 rounded-full mr-4" src={photoSrc} alt="" />
    </div>
  );
}
export default Header;
