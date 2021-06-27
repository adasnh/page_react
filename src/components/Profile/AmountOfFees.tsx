import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {fontSize} from "../../styledHelpers/FontSizes";
import {Carousel} from "../../styledHelpers/Components";
import {FlexColumn} from "../../styledHelpers/Grid";

const AmountOfFeesContainer = styled(FlexColumn)`
  border-top: ${Colors.lightGrey} 1px solid;
  padding-top: 12px;
  padding-bottom: 15px;
  
  h1 {
    font-size: ${fontSize["18"]};
    font-weight: 700;
    color:darkblue;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    color:darkblue;
  }
`;

const AmountOfFeesTableWrapper = styled(Carousel)`
  margin-top: 10px;
`;

const AmountOfFeesTable = styled.table`
  thead {
    tr {
      
      th {

        border: ${Colors.lightGrey} solid 2px;
        font-weight: bold;
        font-size: ${fontSize["18"]};
        white-space: nowrap;
        padding:6px;
      }
    }
  }

  tbody {
    tr {
      th, td {
        border: ${Colors.lightGrey} solid 2px;
        padding-left: 7px;
        padding-top: 4px;
        font-size: ${fontSize["14"]};
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 160px;
      }
    }
  }
`;

function AmountOfFees() {
    return (
        <AmountOfFeesContainer>
            <h1>Amount of fees</h1>

            <AmountOfFeesTableWrapper>
                <AmountOfFeesTable className="table">
                    <thead>
                    <tr>
                        <th scope="col">Year</th>
                        <th scope="col">Cost center</th>
                        <th scope="col">Total amount</th>
                        <th scope="col">Law firm</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">2019</th>
                        <td>CS 153</td>
                        <td>3500$</td>
                        <td>Clifford chance</td>
                    </tr>
                    <tr>
                        <th scope="row">2018</th>
                        <td>CS 47</td>
                        <td>9500$</td>
                        <td>Linklasters</td>
                    </tr>
                    <tr>
                        <th scope="row">2017</th>
                        <td>CS 32</td>
                        <td>10 500$</td>
                        <td>Linklasters</td>
                    </tr>
                    <tr>
                        <th scope="row"/>
                        <td>CS 153</td>
                        <td>18 500$</td>
                        <td>Linklasters</td>
                    </tr>
                    <tr>
                        <th scope="row"/>
                        <td>CS 153</td>
                        <td>15 500$</td>
                        <td>Linklasters</td>
                    </tr>
                    </tbody>
                </AmountOfFeesTable>
            </AmountOfFeesTableWrapper>
        </AmountOfFeesContainer>
    );
}

export default AmountOfFees;