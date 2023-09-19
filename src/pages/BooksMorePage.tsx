
import { Breadcrumb, Card, Tag } from 'antd'
import '../App.css'
import NavBar from '../components/NavBar'

import { useGetBookByIdQuery } from '../features/books/booksApi';
import { useParams } from 'react-router-dom';

import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

const onChange = (key: string) => {
    console.log(key);
};

function BooksMorePage() {

    const { id } = useParams()
    const { data, error, isLoading } = useGetBookByIdQuery(id);

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Произошла ошибка: { }</div>;
    }

    if (!data) {
        return <div>Книга не найдена</div>;
    }

    const book = data.volumeInfo;
    console.log();

    const colors = [
        'magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan'
    ]

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Prevue',
            children: <div className=''>        <h2>{book.title} <br /> <Tag color="magenta"> {book.authors.join(', ')}</Tag></h2>
                <Card
                    hoverable
                    style={{ width: '50%', overflow: 'hidden', padding: "10px", margin: '0 auto' }}
                    cover={book.imageLinks && (
                        <img
                            src={book.imageLinks.thumbnail}
                            alt={`Обложка ${book.title}`}
                        />
                    )}
                ></Card>



            </div>,
        },
        {
            key: '2',
            label: 'Category',
            children: <div>
                {book?.categories?.map((item: string, index: number) => <Tag color={colors[index]}>{item}</Tag>)}
            </div>,
        },
        {
            key: '3',
            label: 'Description',
            children: <div
                dangerouslySetInnerHTML={{ __html: book.description }}
            />,
        },
    ];
    return (
        <>
            <NavBar />
            <br />
            <Breadcrumb
                items={[
                    {
                        href: '/',
                        title: <HomeOutlined />,
                    },
                    {
                        href: '',
                        title: (
                            <>
                                <UserOutlined />
                                <span>books more</span>
                            </>
                        ),
                    }

                ]}
            />
            <div className="App">
                <Card>
                    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                </Card>
                <br />
            </div>
        </>
    )
}

export default BooksMorePage
