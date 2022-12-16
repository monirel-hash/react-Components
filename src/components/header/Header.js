import React from "react";
import { CardContainer, Card , Price, Button } from "./HeaderStyle";


function ProductCard() {
  return (
    <>
    <CardContainer>
      <Card>
        <img src="https://www.w3schools.com/w3images/jeans3.jpg" alt="Denim Jeans" style={{ width: '100%' }} />
        <h1>Tailored Jeans</h1>
        <Price>$19.99</Price>
        <p><Button>Add to Cart</Button></p>
      </Card>
      <Card>
        <img src="https://www.w3schools.com/w3images/jeans3.jpg" alt="Denim Jeans" style={{ width: '100%' }} />
        <h1>Tailored Jeans</h1>
        <Price>$19.99</Price>
        <p><Button>Add to Cart</Button></p>
      </Card>
      <Card>
        <img src="https://www.w3schools.com/w3images/jeans3.jpg" alt="Denim Jeans" style={{ width: '100%' }} />
        <h1>Tailored Jeans</h1>
        <Price>$19.99</Price>
        <p><Button>Add to Cart</Button></p>
      </Card>
      <Card>
        <img src="https://www.w3schools.com/w3images/jeans3.jpg" alt="Denim Jeans" style={{ width: '100%' }} />
        <h1>Tailored Jeans</h1>
        <Price>$19.99</Price>
        <p><Button>Add to Cart</Button></p>
      </Card>
    </CardContainer>
    </>
  );
}

export default ProductCard;