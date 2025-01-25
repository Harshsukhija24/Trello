import ArchiveIcon from "@mui/icons-material/Archive";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const apiToken = import.meta.env.VITE_API_TOKEN;

const ArchiveList = ({ id, triggerReload }) => {
  async function archiveList(event) {
    event.stopPropagation();
    try {
      const response = await fetch(
        `${baseUrl}/lists/${id}/closed?value=true&key=${apiKey}&token=${apiToken}`,
        {
          method: "PUT",
        }
      );
      triggerReload();
    } catch (error) {
      console.error("Error archiving list:", error);
    }
  }

  return (
    <div>
      <ArchiveIcon onClick={archiveList} sx={{ cursor: "pointer" }} />
    </div>
  );
};

export default ArchiveList;
