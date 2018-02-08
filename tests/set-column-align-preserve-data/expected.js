/** @jsx hyperscript */
import hyperscript from '../hyperscript';

export default (
    <document>
        <table custom="state" presetAlign={['center', 'right']}>
            <table_row>
                <table_cell textAlign="center">
                    <paragraph>Col 0, Row 0</paragraph>
                </table_cell>
                <table_cell textAlign="right">
                    <paragraph>Col 1, Row 0</paragraph>
                </table_cell>
            </table_row>
            <table_row>
                <table_cell textAlign="center">
                    <paragraph>Col 0, Row 1</paragraph>
                </table_cell>
                <table_cell textAlign="right">
                    <paragraph>Col 1, Row 1</paragraph>
                </table_cell>
            </table_row>
            <table_row>
                <table_cell textAlign="center">
                    <paragraph>Col 0, Row 2</paragraph>
                </table_cell>
                <table_cell textAlign="right">
                    <paragraph>Col 1, Row 2</paragraph>
                </table_cell>
            </table_row>
        </table>
    </document>
);