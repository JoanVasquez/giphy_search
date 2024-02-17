import { GridItems } from "./GridItem";

const Grid = ({ data }: any) => {
    console.log(data)

  return (
    <div className="row">
      {data.data?.length &&
        data.data?.map((item: any) => (
          <GridItems key={item.id} img={item.images.preview_gif.url} />
        ))}
    </div>
  );
};

export default Grid;
