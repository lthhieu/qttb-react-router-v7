export function Welcome() {
  return (
    <>
      <div className="leading-[42px]">
        <ul className="list-disc">
          <li>Tên phòng: Quản trị - Thiết bị</li>
          <li>Tên tiếng Anh: Office of Equipment and Facilities Management</li>
          <li>Văn phòng: B0106 (Nhà B, tầng 1)</li>
          <li>Trưởng phòng phụ trách: ThS. Nguyễn Văn Tám; Email: <span className="cursor-pointer underline text-[#1b4d85]">tamnv@vlute.edu.vn</span></li>
          <li>Phó trưởng phòng:
            <ul className="ml-4">
              <li>- ThS. Nguyễn Thanh Hoàng; Email: <span className="cursor-pointer underline text-[#1b4d85]">hoangnt@vlute.edu.vn</span></li>
              <li>- ThS. Nguyễn Đức Hải; Email: <span className="cursor-pointer underline text-[#1b4d85]">haind@vlute.edu.vn</span></li>
            </ul>
          </li>
          <li>Email: qttb@vlute.edu.vn</li>
        </ul>
      </div>
    </>
  );
}
