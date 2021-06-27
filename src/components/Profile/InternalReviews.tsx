import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {fontSize} from "../../styledHelpers/FontSizes";
import {FlexColumn} from "../../styledHelpers/Grid";

const InternalReviewsContainer = styled(FlexColumn)`
  border-top: ${Colors.lightGrey} 1px solid;
  padding-top: 15px;
  padding-bottom: 15px;
  
  h1 {
    font-size: ${fontSize["18"]};
    font-weight: 700;
    color:darkblue;
  }

  a {
    padding-top: 6px;
    text-decoration: none;
    font-weight: 700;
  }
`;

const InternalReviewsTableWrapper = styled.table`
  margin-top: 20px;
`;

const InternalReviewsTable = styled.table`
  thead {
    tr {
      th {
        border: ${Colors.lightGrey} solid 2px;
        font-weight: bold;
        font-size: ${fontSize["18"]};
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
        max-width: 160px;
      }
    }
  }
`;

function InternalReviews() {
    return (
        <InternalReviewsContainer>
            <h1>Internal reviews</h1>

            <InternalReviewsTableWrapper>
                <InternalReviewsTable className="table">
                    <thead>
                    <tr>
                        <th className="column">Name</th>
                        <th className="column">Entity</th>
                        <th className="column">Location</th>
                        <th className="column">Expertise</th>
                        <th className="column">Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th className="row">Operation times</th>
                        <td>Renault corsa</td>
                        <td>France</td>
                        <td>#Tax</td>
                        <td>18/02/2020</td>
                    </tr>
                    <tr>
                        <th className="row">Op. Prometheus</th>
                        <td>Renault HQ</td>
                        <td>Usa</td>
                        <td>#M&A</td>
                        <td>18/02/2019</td>
                    </tr>
                    <tr>
                        <th className="row">Op. Latandre</th>
                        <td>Renault brosa</td>
                        <td>Italia</td>
                        <td>#Social</td>
                        <td>20/01/2019</td>
                    </tr>
                    </tbody>
                </InternalReviewsTable>
            </InternalReviewsTableWrapper>

            <a href="test">See more reviews</a>
        </InternalReviewsContainer>
    );
}

export default InternalReviews;