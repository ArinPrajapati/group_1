import { Container, Col, Card, Image } from "react-bootstrap";
import { data as Data } from "../utils/data";
import Card2 from "./Card2";
import { Key } from "react";
import { JSX } from "react/jsx-runtime";
const ArticleCard = ({
  img,
  title,
  tag,
  subtitle,
  userImg,
  username,
  views,
}: {
  img: string;
  title: string;
  tag: string;
  subtitle: string;
  userImg: string;
  username: string;
  views: string;
}) => (
  <Card className="mb-4">
    <a href="#">
      <Card.Img variant="top" src={img} alt="Card image cap" />
      <Card.Body>
        <p className="cardTag">{tag}</p>
        <h5 className="card-title">{title}</h5>
        <p className="cardSub">{subtitle}</p>
        <p className="carduser">
          <div className="user">
            <Image src={userImg} alt="" roundedCircle />
            {username}
          </div>
          <div className="details">
            <p className="views">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon/action/visibility_24px">
                  <path
                    id="icon/action/visibility_24px_2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z"
                    fill="#525252"
                  />
                </g>
              </svg>

              {views}
            </p>
            <p className="share">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_973)">
                  <path
                    d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z"
                    fill="#2D2D2D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_973">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </p>
          </div>
        </p>
      </Card.Body>
    </a>
  </Card>
);

const ArticleList = ({ data }: { data: any }) => (
  <Container>
    <Col>
      {data.map((article: JSX.IntrinsicAttributes & { img: string; title: string; tag: string; subtitle: string; userImg: string; username: string; views: string; }, index: Key | null | undefined) => (
        <Col key={index} md={4}>
          <ArticleCard {...article} />
        </Col>
      ))}
      <Card2 />
    </Col>
  </Container>
);

const data = Data;

const App = () => <ArticleList data={data} />;

export default App;
