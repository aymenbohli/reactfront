import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import DataTable, { createTheme } from 'react-data-table-component';


createTheme('solarized', {
  text: {
    primary: '#000',
    secondary: '#2aa198',
  },
  background: {
    default: '#f8f8ff',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#073642',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
});
const customStyles = {
  rows: {
    style: {
      minHeight: '72px', // override the row height
    }
  },
  headCells: {
    style: {
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
};
const conditionalRowStyles = [
  {
    when: row => row.calories < 300,
    style: {
      backgroundColor: 'green',
      color: 'white',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
];

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      );
  }

  render() {
    const columns = [
      {
        name: 'Name',
        selector: 'name',
        sortable: true,
        left: true,
      }, {
        name: 'User Name',
        selector: 'username',
        sortable: true,
        left: true,
      },
      {
        name: 'Email',
        selector: 'email',
        sortable: true,
        left: true,
      }, {
        name: 'Phone',
        selector: 'phone',
        sortable: true,
        left: true,
      }, {
        name: 'Website',
        selector: 'website',
        sortable: true,
        left: true,
      }
  
    ];
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div class="section1">
            <Container>
              <Row>
                <Col xs={6} md={6}>
                  <h2>Qu'est-ce que le Lorem Ipsum?</h2>
                  <p>
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
                </Col>
                <Col xs={6} md={6}>
                  <Image width="100%" src="http://www.newsmaster.be/wp-content/uploads/2014/11/img-7.jpg" rounded />
                </Col>
              </Row>
            </Container>
          </div>
          <div class="section2">
            <Container>
              <Row>
                <Col xs={12} md={12}>
                  <DataTable
                    data={this.state.items}
                    title="Users List"
                    pagination={true}
                    columns={columns}
                    theme="solarized"
                    conditionalRowStyles={conditionalRowStyles}
                    customStyles={customStyles}
                    selectableRows
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        );
    }
  }
}


export default About;