import { Layout, Menu } from "antd";
const { Sider } = Layout;
import { sideberItemsGenerator } from "../../utils/sideberItemsGenerators";
import { adminPaths } from "../../routers/admin.routes";
import { studentPaths } from "../../routers/student.routes";
import { facultyPaths } from "../../routers/faculty.routes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sideber = () => {
  const user = useAppSelector(selectCurrentUser);

  let sideberItems;

  switch (user!.role) {
    case userRole.ADMIN:
      sideberItems = sideberItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sideberItems = sideberItemsGenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sideberItems = sideberItemsGenerator(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>UP Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideberItems}
      />
    </Sider>
  );
};

export default Sideber;
